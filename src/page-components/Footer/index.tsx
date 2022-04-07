import tw from 'twin.macro';
import Dropdown from 'src/components/dropdown';

const index = () => {
    return (
        <>
            <div tw=" p-4  pt-4 justify-center m-auto flex bg-black text-xs ">
                <div tw=" w-full sm:w-1/5 flex flex-col space-y-4">
                    <span>Questions? Call 1-844-542-4813</span>
                    <a tw="opacity-60">FAQ</a>
                    <a tw="opacity-60">Investor Relations</a>
                    <a tw="opacity-60">Ways to Watch</a>
                    <a tw="opacity-60">Corporate Information</a>
                    <Dropdown />
                    <span>Netflix Canada</span>
                </div>

                <div tw="w-full sm:w-1/5 flex flex-col space-y-4">
                    <a tw="opacity-60">Help Center</a>
                    <a tw="opacity-60">Jobs</a>
                    <a tw="opacity-60">Terms of Use</a>
                    <a tw="opacity-60">Contact Us</a>
                </div>
                <div tw="w-full sm:w-1/5 flex flex-col space-y-4">
                    <a tw="opacity-60">Account</a>
                    <a tw="opacity-60">Redeem Gift Cards</a>
                    <a tw="opacity-60">Privacy</a>
                    <a tw="opacity-60">Speed Test</a>
                </div>

                <div tw="w-full sm:w-1/5 flex flex-col space-y-4">
                    <a tw="opacity-60">Media Center</a>
                    <a tw="opacity-60">Buy Gift Cards</a>
                    <a tw="opacity-60">Cookie Preferences</a>
                    <a tw="opacity-60">Legal Notices</a>
                </div>
            </div>
        </>
    );
};

export default index;
