# Registro de Consumo de Energia

## Descrição
O projeto **Registro de Consumo de Energia** tem como objetivo gerenciar e monitorar os registros de consumo de energia.

O sistema permite realizar o cadastro de usuários, registrar informações, consultar, atualizar e excluir registros e etc.

---

## Diagrama de Classes
<p align="left">
  <img src="./docs/MER_DER.png" alt="Diagrama de Classes">
</p>
<p align="left">
  <img src="Captura de tela 2026-11-26 165659.png" alt="Diagrama de Classes">
</p>


---

## Tecnologias
* JavaScript
* Node.js
* Express
* MySQL
* MySQL2
* Insomnia

---

## Passo a passo para testar

### 1. Clonar o repositório
```bash
git clone URL_DO_REPOSITORIO
```

### 2. Acessar a pasta do projeto
```bash
cd NOME_DO_PROJETO
```

### 3. Instalar as dependências
```bash
npm install mysql2, express, cors
```

### 4. Configurar o banco de dados
* Abrir o MySQL.
* Executar o script SQL disponibilizado no projeto.
* O script criará o banco de dados `usos_ia`, as tabelas `usuario` e `usoia` e inserirá dados para testes.

### 5. Iniciar o servidor
```bash
npm run dev
```

O servidor estará disponível em:
```text
http://localhost:3000
```

### 6. Testar a API no Insomnia
Utilizar o Insomnia para realizar requisições HTTP e testar as funcionalidades do sistema.

---


## Testes do Insomnia

## Testes usuarios
### Login usuario
<p align="left">
  <img src="./docs/usuario_login.png" alt="Login usuario">
</p>

### Listar usuario
<p align="left">
  <img src="./docs/usuario_listar.png" alt="Listar usuario">
</p>

### Buscar usuario
<p align="left">
  <img src="./docs/usuario_buscar.png" alt="Buscar usuario">
</p>

### Cadastrar usuario
<p align="left">
  <img src="./docs/usuario_cadastrar.png" alt="Cadastrar usuario">
</p>

### Deletar usuario
<p align="left">
  <img src="./docs/usuario_deletar.png" alt="Deletar usuario">
</p>

### Atualizar usuario
<p align="left">
  <img src="./docs/usuario_atualizar.png" alt="Atualizar usuario">
</p>

## Testes consumo
### Listar consumo
<p align="left">
  <img src="./docs/consumo_listar.png" alt="Listar consumo">
</p>

### Buscar consumo
<p align="left">
  <img src="./docs/consumo_buscar.png" alt="Buscar consumo">
</p>

### Cadastrar consumo
<p align="left">
  <img src="./docs/consumo_cadastrar.png" alt="Cadastrar consumo">
</p>

### Deletar consumo
<p align="left">
  <img src="./docs/consumo_deletar.png" alt="Deletar consumo">
</p>

### Atualizar consumo
<p align="left">
  <img src="./docs/consumo_atualizar.png" alt="Atualizar consumo">
</p>

### Resumo consumo
<p align="left">
  <img src="./docs/consumo_resumo.png" alt="Resumo consumo">
</p>
