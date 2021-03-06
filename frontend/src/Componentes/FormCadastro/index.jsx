import React from "react";
import { FormGroup, FormLabel, Form } from "react-bootstrap";
import { useFormik } from "formik";
import * as Yup from "yup";
import { criarUsuario } from "../../services/usuarios";
import "./styles.css";

const validationSchema = Yup.object({
	email: Yup.string()
		.email("Utilize um email válido")
		.required("Insira seu email"),
	nome_empresa: Yup.string().required("Insira o nome da empresa"),
	cnpj: Yup.string().required("Insira seu CNPJ"),
	nome_completo: Yup.string().required("Insira seu nome"),
	telefone: Yup.string().required("Insira seu número de telefone"),
	senha: Yup.string()
		.required("Insira sua senha")
		.min(8, "Sua senha deve ter no mínimo 8 caracteres")
		.max(12, "Sua senha deve ter no máximo 12 caracteres"),
	confirmar_senha: Yup.string()
		.oneOf([Yup.ref("senha"), null], "Preencha os campos com senhas iguais!")
		.required("Insira sua senha novamente"),
});

const FormCadastro = () => {
	const formik = useFormik({
		initialValues: {
			email: "",
			nome_empresa: "",
			cnpj: "",
			nome_completo: "",
			telefone: "",
			senha: "",
			confirmar_senha: "",
		},
		validationSchema,
		onSubmit: async (values, { resetForm }) => {
			const a = await criarUsuario({
				email: values.email,
				nome_empresa: values.nome_empresa,
				cnpj: values.cnpj,
				nome_completo: values.nome_completo,
				telefone: values.telefone,
				senha: values.senha,
			});
			console.log(a);
			resetForm({ values: "" });
		},
	});

	return (
		<Form onSubmit={formik.handleSubmit}>
			<FormGroup className="mb-3 input">
				<FormLabel className="label">E-mail</FormLabel>
				<input
					id="email"
					type="email"
					placeholder="Insira seu e-mail"
					value={formik.values.email}
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
				/>
				{formik.touched.email && formik.errors.email ? (
					<span className="formik-erro">{formik.errors.email}</span>
				) : null}
			</FormGroup>

			<FormGroup className="mb-3 input">
				<FormLabel className="label">Nome da Empresa</FormLabel>
				<input
					id="nome_empresa"
					type="text"
					placeholder="Informe o nome da empresa"
					value={formik.values.nome_empresa}
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
				/>

				{formik.touched.nome_empresa && formik.errors.nome_empresa ? (
					<span className="formik-erro">{formik.errors.nome_empresa}</span>
				) : null}
			</FormGroup>

			<FormGroup className="mb-3 input">
				<FormLabel className="label">CNPJ</FormLabel>
				<input
					id="cnpj"
					type="text"
					placeholder="Informe seu CNPJ"
					value={formik.values.cnpj}
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
				/>

				{formik.touched.cnpj && formik.errors.cnpj ? (
					<span className="formik-erro">{formik.errors.cnpj}</span>
				) : null}
			</FormGroup>

			<FormGroup className="mb-3 input">
				<FormLabel className="label">Nome de Usuário</FormLabel>
				<input
					id="nome_completo"
					type="text"
					placeholder="Digite seu nome"
					value={formik.values.nome_completo}
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
				/>
				{formik.touched.nome_completo && formik.errors.nome_completo ? (
					<span className="formik-erro">{formik.errors.nome_completo}</span>
				) : null}
			</FormGroup>

			<FormGroup className="mb-3 input">
				<FormLabel className="label">Telefone / Celular</FormLabel>
				<input
					id="telefone"
					type="tel"
					placeholder="Ex: 11990909090"
					value={formik.values.telefone}
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
				/>
				{formik.touched.telefone && formik.errors.telefone ? (
					<span className="formik-erro">{formik.errors.telefone}</span>
				) : null}
			</FormGroup>

			<FormGroup className="mb-3 input">
				<FormLabel className="label">Senha</FormLabel>
				<input
					id="senha"
					type="password"
					placeholder="Sua senha"
					value={formik.values.senha}
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
				/>
				{formik.touched.senha && formik.errors.senha ? (
					<span className="formik-erro">{formik.errors.senha}</span>
				) : null}
			</FormGroup>

			<FormGroup className="mb-3 input">
				<FormLabel className="label">Confirmar senha</FormLabel>
				<input
					id="confirmar_senha"
					type="password"
					placeholder="Confirme a senha"
					value={formik.values.confirmar_senha}
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
				/>
				{formik.touched.confirmar_senha && formik.errors.confirmar_senha ? (
					<span className="formik-erro">{formik.errors.confirmar_senha}</span>
				) : null}
			</FormGroup>

			<button type="submit" className="button-form-cadastro">
				Criar conta
			</button>
		</Form>
	);
};

export default FormCadastro;