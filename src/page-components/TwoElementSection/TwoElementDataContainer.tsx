import tw from 'twin.macro';
import {
    TitleContainer,
    ImageContainer,
} from 'src/page-components/TwoElementSection/TwoElementContainer';
import mainPicture from 'src/page-components/images/back-img.jpg';
import mobile from 'src/page-components/images/device-pile (1).png';
import kids from 'src/page-components/images/a.png';

const TwoElementDataContainer = () => {
    return (
        <>
            <div tw="bg-black">
                {/*  <div tw="w-full flex flex-row ">*/}
                <div tw="w-full mx-auto flex px-5 py-24 md:flex-row flex-col items-center border-b-4 border-secondary-dark">
                    <div tw="w-full">
                        <TitleContainer
                            h1="Enjoy on your TV."
                            h2="Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more."
                        />
                    </div>
                    <div tw="w-full">
                        <ImageContainer image={mainPicture} />
                    </div>
                </div>

                <div tw="w-full mx-auto flex px-5 py-24 md:flex-row flex-col-reverse items-center border-b-4 border-secondary-dark">
                    <div tw="w-full">
                        <ImageContainer image={mobile} />
                    </div>
                    <div tw="w-full">
                        <TitleContainer
                            h1="Download your shows to watch offline."
                            h2="Save your favorites easily and always have something to watch."
                        />
                    </div>
                </div>

                <div tw="w-full mx-auto flex px-5 py-24 md:flex-row flex-col items-center border-b-4 border-secondary-dark">
                    <div tw="w-full">
                        <TitleContainer
                            h1="Create profiles for kids."
                            h2="Send kids on adventures with their favorite characters in a space made just for them—free with your membership."
                        />
                    </div>
                    <div tw="w-full">
                        <ImageContainer image={kids} />
                    </div>
                </div>
            </div>
        </>
    );
};

export default TwoElementDataContainer;
