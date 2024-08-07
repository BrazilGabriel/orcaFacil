
const EmptyPage = ({ displayImg, displayImgAlt, text }) => {

  return (
    <div className="w-full flex flex-col justify-center items-center gap-9">
      <p className="text-left self-start font-bol">{text}</p>
      <img className="max-w-80 pt-8" src={displayImg} alt={displayImgAlt} />
    </div>
  );
};

export default EmptyPage;
