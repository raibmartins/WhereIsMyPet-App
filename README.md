# APLICATIVO MÓVEL PARA RASTREAMENTO DO ANIMAL - WHERE IS MY PET (API)

Este projeto é um aplicativo mobile para rastreamento de animais, desenvolvido com React Native. Ele utiliza a biblioteca Expo para facilitar o desenvolvimento e o React Native para a interface móvel. Utilizado no trabalho de conclusão de curso para a Universidade do Extremo Sul Catarinense (UNESC)

## Requisitos

- Node.js 20.12.2
- Expo 50.0.14
- React Native 0.73.6
- NPM ou Yarn
- Backend API em execução

## Instalação

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/seu-usuario/seu-repositorio.git
   cd seu-repositorio
   ```
2. **Instale as dependências:**

Com NPM:

```bash
npx install
```

Ou com Yarn:

```bash
yarn install
```

3. **Configure o endereço da API:**

Certifique-se de que a URL da API no projeto está correta. Edite o arquivo de configuração onde a URL da API está definida ".env";

```bash
PATH_URL = http://192.168.0.8:8082/
```

4. **Inicie o Expo:**

```bash
npx expo start
```

5. **Problemas Comuns:**

**Dependências não instaladas**

Se você encontrar erros relacionados a módulos não encontrados, certifique-se de que todas as dependências estão instaladas corretamente. Execute npm install ou yarn install novamente para garantir que todas as dependências sejam baixadas e instaladas.

**API não ligada**

O aplicativo móvel depende de uma API backend em execução. Certifique-se de que a API está ligada e acessível. Se a API não estiver em execução, o aplicativo não conseguirá buscar dados e você verá erros relacionados à falta de conexão.

**URL da API apontando para a porta errada**

Se a URL da API estiver configurada incorretamente, o aplicativo não conseguirá se comunicar com o backend. Verifique a configuração da URL da API e certifique-se de que ela aponta para o endereço e porta corretos onde a API está em execução.

6. **Scripts Disponíveis**

  ```bash
  npm start ou yarn start
  ```
Inicia o projeto Expo.


```bash
  npm run android ou yarn android
  ```
Compila e roda o aplicativo no emulador Android.

```bash
  npm run ios ou yarn ios
  ```
Compila e roda o aplicativo no emulador iOS (somente em sistemas macOS).

7. **Contribuindo:**
   
- Faça um fork do projeto.
- Crie uma nova branch (git checkout -b feature/sua-feature).
- Commit suas mudanças (git commit -am 'Adiciona nova feature').
- Faça push para a branch (git push origin feature/sua-feature).
- Crie um novo Pull Request.
