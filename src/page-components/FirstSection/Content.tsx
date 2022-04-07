import tw from 'twin.macro';
import Email from 'src/components/Email';

const MainPageContent = () => {
    return (
        <div tw="  m-auto  w-full absolute -top-36 sm:-top-64 md:-top-96 lg:-mt-32  space-y-1 sm:space-y-5 ">
            <div tw="text-xl font-bold sm:text-4xl md:text-6xl flex justify-center ">
                Unlimited movies, TV
            </div>
            <div tw="text-xl sm:text-4xl font-bold md:text-6xl flex justify-center ">
                shows, and more.
            </div>
            <div tw="text-xs sm:text-xl font-semibold flex justify-center">
                Watch anywhere. Cancel anytime.
            </div>
            <div tw="text-xs sm:text-xl flex justify-center">
                Ready to watch? Enter your email to create or restart your
                membership.
            </div>
            <div tw="text-xl w-3/5 m-auto pt-9 sm:pt-6 ">
                <Email />
            </div>
        </div>
    );
};

export default MainPageContent;
