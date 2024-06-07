import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import { adminUserFormSchema } from "../libs/zod/adminUserFormSchema";
import { adminUserService } from "../services/AdminUserService";
import { rolesService } from "../services/RolesServices";

type AdminUserFormSchema = z.infer<typeof adminUserFormSchema>;

export function useAdminUserFormContainer() {
  const [showPassword, setShowPassword] = useState(false);
  const [role, setRole] = useState(0);

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AdminUserFormSchema>({ resolver: zodResolver(adminUserFormSchema) });

  const query = useQuery({ queryKey: ["roles"], queryFn: rolesService.getRoles });

  const mutation = useMutation({
    mutationFn: adminUserService.createAdminUser,
    onSuccess: () => navigate("/configuracoes"),
  });

  function onSubmit(data: AdminUserFormSchema) {
    mutation.mutate({
      ...data,
      roleId: role,
    });
  }

  return {
    showPassword,
    setShowPassword,
    setRole,
    register,
    handleSubmit,
    errors,
    query,
    mutation,
    onSubmit,
  };
}
