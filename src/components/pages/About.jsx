function About() {
  return (
    <div className="flex flex-col w-full p-8 items-start">
      <section className="w-full">
        <h1 className="text-3xl mb-8 font-bold">OrçaFácil</h1>
        <p className="pb-6">
          Esta aplicação web foi desenvolvida para gerenciar custos de projetos,
          permitindo a criação, edição e exclusão de projetos. Cada projeto
          possui um orçamento, ao qual podem ser associados serviços e custos,
          facilitando o acompanhamento e o controle financeiro de maneira
          eficiente.
        </p>
        <p className="pb-6">
          O sistema foi criado utilizando React e estilizado com Tailwind CSS,
          proporcionando uma interface moderna e responsiva. A construção foi
          feita com Vite, e a aplicação está hospedada no Vercel. A comunicação
          com o banco de dados JSON, hospedado no Render, permite o consumo e
          envio de informações de forma eficaz.
        </p>
        <p className="pb-6">
          Embora o projeto tenha seguido o tutorial do Matheus Battisti, do <a href="https://www.youtube.com/@MatheusBattisti" target="_blank" className="text-indigo-400">canal Hora de Codar</a>, toda a autoria do design, responsividade,
          estilização com Tailwind, deploy em nuvem tanto da aplicação quanto do
          banco de dados, além de melhorias na experiência do usuário e ajustes
          adicionais, são de minha autoria.
        </p>
        <p className="pb-6">
          Essa experiência foi essencial para consolidar meu conhecimento em
          diversas funcionalidades do React e aprofundar minha compreensão dos
          processos de comunicação em nuvem. Agradeço por dedicar um tempo para
          conhecer meu projeto!
        </p>
      </section>
      <section className="w-full">
        <h2 className="font-bold text-xl">Tecnologias:</h2>
        <div className="flex flex-col md:flex-row items-center justify-between">
        <a href="https://nodejs.org" target="_blank"><img className="text-white p-4 max-h-24 w-32 opacity-30 hover:opacity-100" src="/node-js_logo.svg" alt="node js"/></a>
        <a href="https://react.dev" target="_blank"><img className="text-white p-4 max-h-24 w-32 opacity-30 hover:opacity-100" src="/react_logo.svg" alt="react js"/></a>
        <a href="https://render.com" target="_blank"><img className="text-white p-4 max-h-24 w-32 opacity-30 hover:opacity-100" src="/render_logo.svg" alt="render"/></a>
        <a href="https://tailwindcss.com" target="_blank"><img className="text-white p-4 max-h-24 w-32 opacity-30 hover:opacity-100" src="/tailwind-css_logo.svg" alt="tailwind css"></img></a>
        <a href="https://vercel.com" target="_blank"><img className="text-white p-4 max-h-24 w-32 opacity-30 hover:opacity-100" src="/vercel_logo.svg" alt="vercel"/></a>
        <a href="https://vitejs.dev" target="_blank"><img className="text-white p-4 max-h-24 w-32 opacity-30 hover:opacity-100" src="/vite_logo.svg" alt="vite js"/></a>

        </div>

      </section>
    </div>
  );
}

export default About;
