import tw from 'twin.macro';
import SimpleAccordion from 'src/page-components/HelpMenu/Accordian';
import Email from 'src/components/Email';

const AccoridanContainer = () => {
    return (
        <div tw="w-full px-5 py-24 mx-auto bg-black border-b-4 border-secondary-dark">
            <div tw="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
                <SimpleAccordion />
                <div tw=" flex flex-col w-3/4 m-auto mb-4 mt-10 space-y-12 md:space-y-3">
                    <div tw="flex flex-col">
                        Ready to watch? Enter your email to create or restart
                        your membership.
                    </div>
                    <div>
                        <Email />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AccoridanContainer;
