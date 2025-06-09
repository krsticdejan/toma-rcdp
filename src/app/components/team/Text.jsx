const ShortBio = ({ text }) => {
  return (
    <div
      className="biography__text"
      dangerouslySetInnerHTML={{ __html: text }}
    />
  );
};

export default ShortBio;
