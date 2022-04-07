import React from 'react';
import tw from 'twin.macro';
import { useState } from 'react';

function Accoridan() {
    const [selected, setSelected] = useState(null);
    const toggle = (i) => {
        if (selected == i) {
            return setSelected(null);
        }
        setSelected(i);
    };

    return (
        <>
            <div tw=" m-auto flex w-3/4  text-2xl ">
                <div tw="w-full">
                    {data.map((item, i) => (
                        <div tw="bg-secondary-dark mb-5 p-5 ">
                            <div
                                onClick={() => toggle(i)}
                                tw="text-white cursor-pointer flex justify-between items-start  "
                            >
                                {item.question}
                                <span>{selected === i ? '-' : '+'}</span>
                            </div>

                            {selected === i ? (
                                <div tw=" border-t-2 border-t-black py-2 text-white justify-items-start items-start height[auto] max-h-screen transition-all ">
                                    {' '}
                                    {item.answer}
                                </div>
                            ) : (
                                <div tw="text-white justify-items-start height[auto] max-h-0 overflow-hidden transition-all">
                                    {' '}
                                    {item.answer}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

const data = [
    {
        question: 'What is Netflix?',
        answer: 'Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.',
    },
    {
        question: 'How much does Netflix cost?',
        answer: 'Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from $9.99 to $20.99 a month. No extra costs, no contracts.',
    },
    {
        question: 'Where can I watch?',
        answer: 'Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.',
    },
    {
        question: 'How do I cancel?',
        answer: 'Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from $9.99 to $20.99 a month. No extra costs, no contracts.',
    },
    {
        question: 'Where can I watch on Netflix?',
        answer: 'Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.',
    },
    {
        question: 'Is Netflix good for kids?',
        answer: 'Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from $9.99 to $20.99 a month. No extra costs, no contracts.',
    },
];
export default Accoridan;
