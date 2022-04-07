import tw from 'twin.macro';

interface ButtonTypes {
    variant: 'small' | 'Large';
}

const Button: React.FC<ButtonTypes> = ({ variant }) => {
    const smallButton = (
        <div tw="text-white bg-red-700 py-2 px-5 mt-3 rounded text-align[center]">
            <button> Sign In </button>
        </div>
    );
    const largeButton = (
        <div tw="text-white text-xs sm:text-xl bg-red-700 px-2  md:px-20 py-0 sm:py-1 w-10/12 h-8 sm:h-full ">
            <button>Get Started</button>
        </div>
    );

    return <div>{variant === 'small' ? smallButton : largeButton}</div>;
};

export default Button;
