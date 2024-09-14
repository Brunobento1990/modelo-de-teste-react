import Joyride from "react-joyride";

export function JoyrideApp() {
  const steps = [
    {
      target: ".menu",
      content:
        "Este é o menu de navegação, aqui se encontra todos os acessos aos cadastros.",
    },
    {
      target: ".novo-registro",
      content: "Clique para adicionar um novo registro, click ou pressione 'INSERT'.",
    },
    {
      target: ".pesquisa",
      content: "Digite para pesquisar nos principais campos.",
    },
    {
      target: ".pesquisar",
      content: "Clique para pesquisar, click ou pressione 'ENTER'.",
    },
    {
      target: ".tabela",
      content: "Tabela com os cadastros.",
    },
    {
      target: ".item-por-pagina",
      content: "Quantidade de itens por página.",
    },
    {
      target: ".paginacao",
      content: "Mudar de página dos registros.",
    },
  ];
  const locale = {
    back: "Voltar",
    close: "Fechar",
    last: "Concluir",
    next: "Próximo",
    skip: "Pular",
  };

  return (
    <Joyride
      run
      steps={steps}
      continuous={true}
      showProgress={true}
      showSkipButton={true}
      locale={locale}
      styles={{
        options: {
          arrowColor: "#e3ffeb",
          backgroundColor: "#e3ffeb",
          overlayColor: "rgba(79, 26, 0, 0.4)",
          primaryColor: "#000",
          textColor: "#004a14",
          width: 900,
          zIndex: 5000,
        },
      }}
    />
  );
}
