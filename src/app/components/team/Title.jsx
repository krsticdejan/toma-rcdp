const Title = ({ text }) => {
  return (
    <div
      className="biography__banner-text"
      dangerouslySetInnerHTML={{ __html: text }}
    />
  );
};

export default Title;
