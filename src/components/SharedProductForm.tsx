import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "./ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "./ui/form";
import { Input } from "./ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { z } from "zod";
import { useMutation, useQuery } from "@tanstack/react-query";
import { productService } from "@/services/ProductService";
import { Textarea } from "./ui/textarea";
import { useState } from "react";

const acceptedFileTypes = ["image/png", "image/jpg", "image/jpeg", "image/webp"];
const maximumByteSizeAccepted = 2 ** 20 * 3;

const schema = z.object({
  barCode: z.string().max(13, {
    message:
      "Por favor, insira um código de barras válido. O código deve ter: 13 dígitos para EAN-13",
  }),
  productName: z.string().min(5, { message: "O nome do produto deve ter no mínimo 5 caracteres." }),
  description: z
    .string()
    .min(5, {
      message:
        "Atenção: A descrição do produto deve ter pelo menos 50 caracteres para ser válida. Adicione informações como marca, peso, e características principais.",
    })
    .max(100, {
      message: "Atenção: A descrição do produto deve ter no máximo 100 caracteres para ser válida.",
    }),
  measureId: z.string(),
  picture: z
    .instanceof(FileList)
    .refine((val) => val.length, {
      message: "Nenhum arquivo selecionado. Por favor, escolha um arquivo para enviar.",
    })
    .transform((val) => val.item(0) as NonNullable<File>)
    .refine((val) => val.size <= maximumByteSizeAccepted, {
      message: "O arquivo é muito grande. O tamanho máximo permitido é de 3MB.",
    })
    .refine((val) => acceptedFileTypes.includes(val.type), {
      message:
        "Tipo de arquivo inválido. Por favor, envie um arquivo nos formatos JPG, JPEG, WEBP ou PNG.",
    }),
});

type Schema = z.infer<typeof schema>;

export function SharedProductForm() {
  const [selectedPicture, setSelectedPicture] = useState<File | undefined>();

  const form = useForm<Schema>({
    resolver: zodResolver(schema),
    defaultValues: {
      barCode: "",
      productName: "",
      description: "",
      measureId: "1",
    },
  });

  const query = useQuery({ queryKey: ["all-measures"], queryFn: productService.getAllMeasures });
  const mutation = useMutation({ mutationFn: productService.createProduct });

  const onSubmit = async (data: Schema) => {
    const payload = {
      name: data.productName,
      measureId: +data.measureId,
      barcode: data.barCode,
      description: data.description,
      picture: data.picture,
    };

    await mutation.mutateAsync(payload);
  };

  const pictureRef = form.register("picture");

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="flex items-start gap-10 mb-5">
          <FormField
            control={form.control}
            name="barCode"
            render={({ field }) => {
              return (
                <FormItem className="flex-1">
                  <FormLabel>Código de barras</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              );
            }}
          />
          <FormField
            control={form.control}
            name="measureId"
            render={({ field }) => {
              return (
                <FormItem className="flex-1">
                  <FormLabel>Medida</FormLabel>
                  <FormControl>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Unidade (Un)" />
                      </SelectTrigger>
                      <SelectContent>
                        {query.data?.map((measure) => (
                          <SelectItem
                            key={measure.id}
                            value={measure.id.toString()}
                          >
                            {measure.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              );
            }}
          />
        </div>

        {!selectedPicture ? (
          <div className="relative border h-[390px] border-stone-300 border-dashed rounded-md flex justify-center items-center mb-5">
            <div className="absolute top-2/4 left-1/3 text-center cursor-pointer">
              <strong className="block text-orange-400 text-sm">
                Arraste uma foto ou clique para subir
              </strong>
              <span className="text-stone-400 text-xs">
                Arquivos aceitos PNG, JPG, JPEG e WEBP (3mb máx)
              </span>
            </div>
            <FormField
              control={form.control}
              name="picture"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      className="w-[850px] h-[410px] opacity-0"
                      type="file"
                      accept=".png,.jpg,.jpeg,.webp"
                      {...pictureRef}
                      onChange={(ev) => {
                        field.onChange(ev.target.files);
                        setSelectedPicture(ev.target.files?.[0]);
                      }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        ) : (
          <img
            className="w-[390px] mx-auto"
            src={URL.createObjectURL(selectedPicture)}
          />
        )}

        <FormField
          control={form.control}
          name="productName"
          render={({ field }) => {
            return (
              <FormItem className="flex-1 mb-5 mt-5">
                <FormLabel>Nome do produto</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            );
          }}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => {
            return (
              <FormItem className="flex-1 mb-5">
                <FormLabel>Descrição</FormLabel>
                <FormControl>
                  <Textarea {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            );
          }}
        />
        <div className="flex justify-end gap-6">
          <Button
            className="w-64"
            variant="secondary"
            type="button"
          >
            Cancelar
          </Button>
          <Button
            className="w-64"
            type="submit"
          >
            Salvar
          </Button>
        </div>
      </form>
    </Form>
  );
}
