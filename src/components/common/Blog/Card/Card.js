import MainImage from "../MainImage";
import Title from "../Title";
import Information from "../Information";
import Author from "../Author";
import ContainerCard from "../ContainerCard";

function Card(props) {
  const {
    imagePost = "",
    title = "this is title",
    information = "This is information",
    authorImg = "",
    authorName = "Author 1",
    date = new Date(),
  } = props;
  return (
    <ContainerCard className=" overflow-hidden rounded-xl  max-w-[250px] h-[400px] max-h-[400px] hover:bg-[#60a5fa]">
      <MainImage img={imagePost} />
      <Title title={title} />
      <Information information={information} />
      <Author authorImg={authorImg} authorName={authorName} date={date} />
    </ContainerCard>
  );
}

export default Card;
