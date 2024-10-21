const TemplateExpressions = () => {
  const name = "Diego Antonio";
  const date = {
    age: 31,
    job: "Programmer",
  };

  return (
    <div>
      <h1>Olá {name}, tudo bem? </h1>
      <p>Atua como: {date.job} </p>
      <p>{console.log("JSX React")}</p>
    </div>
  );
};

export default TemplateExpressions;
