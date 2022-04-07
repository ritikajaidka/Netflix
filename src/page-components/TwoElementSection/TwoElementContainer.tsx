import tw from 'twin.macro';
import Image from 'next/image';

interface ContainerImage {
    image: string;
}

interface ContainerTitle {
    h1: string;
    h2: string;
}

export const TitleContainer: React.FC<ContainerTitle> = ({ h1, h2 }) => {
    const TitleSection = (
        <div tw="lg:flex-grow md:w-full m-auto lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <div tw="text-3xl font-bold sm:text-5xl mb-4">{h1}</div>
            <div tw="text-2xl font-semibold">{h2}</div>
        </div>
    );

    return <div> {TitleSection}</div>;
};

export const ImageContainer: React.FC<ContainerImage> = ({ image }) => {
    const ImageSection = (
        <div tw=" pt-3 m-auto md:w-1/2 w-5/6 mb-10 md:mb-0">
            <Image tw="object-cover object-center rounded" src={image} />
        </div>
    );

    return <div>{ImageSection}</div>;
};
