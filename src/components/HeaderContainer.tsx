import tw from 'twin.macro';
import Image from 'next/image';
import Dropdown from 'src/components/dropdown';
import Button from 'src/components/buttons';
import netflix from 'src/page-components/images/netflix.png';

const HeaderContainer = () => {
    return (
        <>
            <div>
                <header tw="text-gray-600">
                    <div tw=" mx-auto flex flex-wrap p-5 flex-row md:flex-row items-center  ">
                        <a tw="flex font-medium items-center text-gray-900 mb-4 md:mb-0 ">
                            <Image src={netflix} />
                        </a>
                        <nav tw="md:ml-auto flex flex-wrap items-center text-base justify-center">
                            <Dropdown />
                        </nav>
                        <Button
                            tw="inline-flex items-center  py-1 px-3 text-base  "
                            variant="small"
                        />
                    </div>
                </header>
            </div>
        </>
    );
};

export default HeaderContainer;
