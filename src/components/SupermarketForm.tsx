import { SupermarketFormSchema } from "../types/SupermarketFormSchema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { supermarketFormSchema } from "../libs/zod/SupermarketFormSchema";
import { Button } from "./ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "./ui/form";
import { Input } from "./ui/input";
import { supermarketService } from "@/services/SupermarketService";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { AiFillPicture } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { SyncLoader } from "react-spinners";
import { stone } from "tailwindcss/colors";
import { Backdrop } from "./ui/backdrop";
import { formatCnpj } from "@/utils/formatCnpj";
import { formatCellPhone } from "@/utils/formatCellPhone";

export function SupermarketForm() {
  const [selectedBanner, setSelectedBanner] = useState<File>();
  const [selectedPicture, setSelectedPicture] = useState<File>();

  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: supermarketService.registerSupermarket,
    onSuccess: () => navigate("/supermercados"),
  });

  const form = useForm<SupermarketFormSchema>({
    resolver: zodResolver(supermarketFormSchema),
    defaultValues: {
      establishmentName: "",
      cnpj: "",
      stateRegistration: "",
      cellPhone: "",
      telephone: "",
      email: "",
      zipCode: "",
      street: "",
      number: "",
      neighborhood: "",
      city: "",
      state: "",
    },
  });

  const cnpj = form.watch("cnpj");
  const cellPhone = form.watch("cellPhone");
  const telephone = form.watch("telephone");

  const bannerRef = form.register("banner");
  const pictureRef = form.register("picture");

  async function onSubmit(data: SupermarketFormSchema) {
    await mutation.mutateAsync(data);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="relative mb-32">
          {!selectedBanner ? (
            <div className="relative border h-[390px] border-stone-300 border-dashed rounded-md flex justify-center items-center mb-5">
              <div className="absolute top-2/4 left-[41%] text-center cursor-pointer">
                <strong className="block text-orange-400 text-sm">
                  Arraste uma foto ou clique para subir
                </strong>
                <span className="text-stone-400 text-xs">
                  Arquivos aceitos PNG, JPG, JPEG e WEBP (3mb máx)
                </span>
              </div>
              <FormField
                control={form.control}
                name="banner"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        className="w-[1520px] h-[390px] opacity-0"
                        type="file"
                        accept=".png,.jpg,.jpeg,.webp"
                        {...bannerRef}
                        onChange={(ev) => {
                          field.onChange(ev.target.files);
                          setSelectedBanner(ev.target.files?.[0]);
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
              className="w-full h-[390px] rounded-lg"
              src={URL.createObjectURL(selectedBanner)}
            />
          )}
          <div className="absolute -bottom-24 left-[44%]">
            {!selectedPicture ? (
              <div className="relative size-48 rounded-full border border-orange-400 bg-stone-200">
                <AiFillPicture
                  size={45}
                  className="absolute left-[38%] top-[38%] text-stone-600"
                />
                <FormField
                  control={form.control}
                  name="picture"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          className="size-48 rounded-full opacity-0"
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
                className="size-48 rounded-full"
                src={URL.createObjectURL(selectedPicture)}
              />
            )}
          </div>
        </div>
        <fieldset className="grid grid-cols-2 gap-5 mb-8">
          <legend className="text-2xl font-bold text-stone-900 mb-6">Dados fiscais</legend>
          <FormField
            control={form.control}
            name="establishmentName"
            render={({ field }) => {
              return (
                <FormItem className="flex-1">
                  <FormLabel>Nome do estabelecimento</FormLabel>
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
            name="cnpj"
            render={({ field }) => {
              return (
                <FormItem className="flex-1">
                  <FormLabel>CNPJ</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      onChange={(ev) => {
                        form.setValue("cnpj", formatCnpj(ev.target.value));
                      }}
                      value={cnpj}
                      maxLength={18}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              );
            }}
          />
          <FormField
            control={form.control}
            name="stateRegistration"
            render={({ field }) => {
              return (
                <FormItem className="flex-1">
                  <FormLabel>Inscrição estadual</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              );
            }}
          />
        </fieldset>
        <fieldset className="grid grid-cols-2 gap-5 mb-8">
          <legend className="text-2xl font-bold text-stone-900 mb-6">Dados para contato</legend>
          <FormField
            control={form.control}
            name="cellPhone"
            render={({ field }) => {
              return (
                <FormItem className="flex-1">
                  <FormLabel>Celular</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      onChange={(ev) =>
                        form.setValue("cellPhone", formatCellPhone(ev.target.value))
                      }
                      value={cellPhone}
                      maxLength={14}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              );
            }}
          />
          <FormField
            control={form.control}
            name="telephone"
            render={({ field }) => {
              return (
                <FormItem className="flex-1">
                  <FormLabel>Telefone</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      onChange={(ev) =>
                        form.setValue("telephone", formatCellPhone(ev.target.value))
                      }
                      value={telephone}
                      maxLength={14}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              );
            }}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => {
              return (
                <FormItem className="flex-1">
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              );
            }}
          />
        </fieldset>
        <fieldset className="grid grid-cols-2 gap-5 mb-8">
          <legend className="text-2xl font-bold text-stone-900 mb-6">Endereço</legend>
          <FormField
            control={form.control}
            name="zipCode"
            render={({ field }) => {
              return (
                <FormItem className="flex-1">
                  <FormLabel>CEP</FormLabel>
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
            name="street"
            render={({ field }) => {
              return (
                <FormItem className="flex-1">
                  <FormLabel>Rua</FormLabel>
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
            name="number"
            render={({ field }) => {
              return (
                <FormItem className="flex-1">
                  <FormLabel>Número</FormLabel>
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
            name="neighborhood"
            render={({ field }) => {
              return (
                <FormItem className="flex-1">
                  <FormLabel>Bairro</FormLabel>
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
            name="city"
            render={({ field }) => {
              return (
                <FormItem className="flex-1">
                  <FormLabel>Cidade</FormLabel>
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
            name="state"
            render={({ field }) => {
              return (
                <FormItem className="flex-1">
                  <FormLabel>Estado</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              );
            }}
          />
        </fieldset>
        <Button type="submit">Salvar</Button>
      </form>
      {mutation.isPending && (
        <Backdrop>
          <div className="w-1/3 flex flex-col justify-center items-center p-16 gap-6 bg-white rounded-md shadow-xl">
            <SyncLoader
              size={12}
              color={stone[900]}
            />
            <span className="text-xl text-stone-900">
              Por favor, aguarde enquanto processamos seu cadastro...
            </span>
          </div>
        </Backdrop>
      )}
    </Form>
  );
}
