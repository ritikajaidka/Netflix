import tw from 'twin.macro';
import Button from 'src/components/buttons';

const Email = () => {
    return (
        <div tw="flex w-10/12 h-8 sm:h-full sm:w-4/5 m-auto -mt-10 md:-mt-0 ">
            <input
                tw="shadow appearance-none border rounded w-1/2  md:w-full py-0 md:py-2 px-3 text-gray-700  focus:outline-none "
                id="username"
                type="text"
                placeholder="Email Address"
            ></input>
            <Button variant="Large" />
        </div>
    );
};

export default Email;
