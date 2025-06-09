const OrdinationTitle = ({ title }) => (
  <div
    className="ordination__text"
    dangerouslySetInnerHTML={{ __html: title }}
  ></div>
);

export default OrdinationTitle;
