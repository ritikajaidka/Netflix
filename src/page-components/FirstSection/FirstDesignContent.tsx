import Image from 'next/image';
import React from 'react';
import tw from 'twin.macro';
import HeaderContainer from 'src/components/HeaderContainer';
import MainPageContent from 'src/page-components/FirstSection/Content';
import picture from 'src/page-components/images/back-img.jpg';

const FirstSectionContent = () => {
    return (
        <div>
            <div tw=" relative  bg-gradient-to-tl from-gray-500 to-black">
                {/* Background Image*/}
                <Image
                    src={picture}
                    tw=" m-0 p-0 object-center object-cover bg-no-repeat mix-blend-overlay"
                />
            </div>

            <div tw=" w-full absolute top-0">
                <HeaderContainer />
            </div>
            <div tw=" w-full absolute">
                <MainPageContent />
            </div>
        </div>
    );
};

export default FirstSectionContent;
