import type { NextPage } from 'next';
import tw from 'twin.macro';
import { Alert } from '@mui/material';
import FirstDesignContent from 'src/page-components/FirstSection/FirstDesignContent';
import TwoElementDataContainer from 'src/page-components/TwoElementSection/TwoElementDataContainer';
import Accordian from 'src/page-components/HelpMenu/AccoridanContainer';
import Footer from 'src/page-components/Footer/index'


const index = () => {
    return (
        <>
                <FirstDesignContent />
                <TwoElementDataContainer />
                <Accordian />
                <Footer />
              
       
        {/**
         * <FirstDesignContent />
                <TwoElementDataContainer />
         * <div tw="grid col-end-1">
    
            <TwoElementDataContainer />
           
        </div> */}
        </>
        
    );
};

export default index;
