# ZapMarkt

Faça merge nesta branch, branch para desenvolvimento. Faça os merges das demais branchs sempre neste branch

## Como Inicializar o Projeto
1. Instale as dependências
```
npm install
```
2. Inicie o projeto
```
npm run dev
```


## Recomendações

- Antes de iniciar uma nova branch faça sempre o git pull da branch develop
- Faça uma cópia da sua nova branch, usando sempre a branch develop
- Sempre que enviar uma atualização para a branch develop, faça um Pull Request com uma descrição da atualização
- Sempre que finalizar uma task dentro de uma branch, apague-a para evitar acumulo de branchs

## Padrão de Nomenclatura de Branchs

```
[sufixo]-[descrição simples da tarefa em inglês]
```

<details>
  <summary>Exemplos de branch</summary>
    <ul>
      <li>feat-concept-research</li>
      <li>feat-share-progress</li>
      <li>test-login</li>
      <li>fix-content-not-added</li>
    </ul>
</details>

<details>
  <summary>Sufixos comuns</summary>
    <ul>
      <li>feat => criação de uma nova funcionalidade</li>
      <li>fix => correção de um bug no projeto</li>
      <li>config => configuração de ferramenta no projeto</li>
      <li>break => mudança significativa do funcionamento da aplicação</li>
    </ul>
</details>

<details>
  <summary>Boas práticas na descrição de tarefas</summary>
    <ul>
      <li>Tente usar poucas palavras, no máximo 5</li>
      <li>A descrição deve conter a essência da tarefa, não ações secundárias (por exemplo, se você vai criar a página inicial, não precisa descrever que vai criar um componente Header, se for o caso)</li>
      <li>Evite repetir a descrição de tarefas anteriores para diminuir confusões</li>
    </ul>
</details>
