import Image from "next/image";
import TokenInfoStyleWrapper from "./TokenInfo.style";

type Props = {
  title: string;
  tokenInfo: {
    title: string;
    text: string;
  }[];
};

const TokenInfo: React.FC<Props> = ({ title, tokenInfo }) => {
  return (
    <TokenInfoStyleWrapper>
      <div className="token_info_title">
        <h4>{title}</h4>
        <Image
          src={"/assets/project-heading-image.png"}
          alt="shape"
          width={101}
          height={15}
        />
      </div>
      <ul className="token_info_list">
        {tokenInfo?.map((info, i) => (
          <li key={i}>
            <span className="token_info_key">{info.title}</span>
            <span className="token_info_value">{info.text}</span>
          </li>
        ))}
      </ul>
    </TokenInfoStyleWrapper>
  );
};

export default TokenInfo;
