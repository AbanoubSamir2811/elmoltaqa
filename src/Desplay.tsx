import part1 from './assets/1.png';
import part2 from './assets/2.png';
import part3 from './assets/3.png';
import part4 from './assets/4.png';
import part5 from './assets/5.png';
import part6 from './assets/6.png';
import part7 from './assets/7.png';
import part8 from './assets/8.png';
import part9 from './assets/9.png';
import part10 from './assets/10.png';
import part11 from './assets/11.png';
import part12 from './assets/12.png';
import part13 from './assets/13.png';
import part14 from './assets/14.png';
import 'animate.css';

import { useEffect, useState } from 'react';
import { doc, onSnapshot } from 'firebase/firestore';
import { db } from './Firebase/configs';

function Desplay() {
    const [nums, setNums] = useState<string[]>([]);

    useEffect(() => {
        const numberRefs = Array.from({ length: 14 }, (_, i) => doc(db, "user", `number${i + 1}`));

        const unsubscribes = numberRefs.map((ref, index) =>
            onSnapshot(ref, (docSnapshot) => {
                if (docSnapshot.exists()) {
                    const data = docSnapshot.data();
                    setNums(prevNums => {
                        const newNums = [...prevNums];
                        newNums[index] = data.id;
                        return newNums;
                    });
                    console.log("Current data: ", data);
                } else {
                    console.log("No such document!");
                }
            })
        );

        // Cleanup the listeners on component unmount
        return () => unsubscribes.forEach(unsubscribe => unsubscribe());
    }, []);

    return (
        <div className='w-[100vw] relative'>
            <img src={part1} className={+nums[0] == 1? 'h-[50vh] w-auto absolute top-[25vh] right-[40vw] animate__animated animate__bounceInDown' : 'hidden'} alt="part1" />
            <img src={part2} className={+nums[1] > 1 && +nums[1] < 14 ? 'h-[50vh] w-auto absolute top-[25vh] right-[40vw] animate__animated animate__bounceInUp' : 'hidden'} alt="part2" />
            <img src={part3} className={+nums[2] > 2 && +nums[2] < 14 ? 'h-[50vh] w-auto absolute top-[25vh] right-[40vw] animate__animated animate__fadeInTopRight' : 'hidden'} alt="part3" />
            <img src={part4} className={+nums[3] > 3 && +nums[3] < 14 ? 'h-[50vh] w-auto absolute top-[25vh] right-[40vw] animate__animated animate__fadeInBottomLeft' : 'hidden'} alt="part4" />
            <img src={part5} className={+nums[4] > 4 && +nums[4] < 14 ? 'h-[50vh] w-auto absolute top-[25vh] right-[40vw]' : 'hidden'} alt="part5" />
            <img src={part6} className={+nums[5] > 5 && +nums[5] < 14 ? 'h-[50vh] w-auto absolute top-[25vh] right-[40vw]' : 'hidden'} alt="part6" />
            <img src={part7} className={+nums[6] > 6 && +nums[6] < 14 ? 'h-[50vh] w-auto absolute top-[25vh] right-[40vw]' : 'hidden'} alt="part7" />
            <img src={part8} className={+nums[7] > 7 && +nums[7] < 14 ? 'h-[50vh] w-auto absolute top-[25vh] right-[40vw]' : 'hidden'} alt="part8" />
            <img src={part9} className={+nums[8] > 8 && +nums[8] < 14 ? 'h-[50vh] w-auto absolute top-[25vh] right-[40vw]' : 'hidden'} alt="part9" />
            <img src={part10} className={+nums[9] > 9 && +nums[9] < 14 ? 'h-[50vh] w-auto absolute top-[25vh] right-[40vw]' : 'hidden'} alt="part10" />
            <img src={part11} className={+nums[10] > 10 && +nums[10] < 14 ? 'h-[50vh] w-auto absolute top-[25vh] right-[40vw]' : 'hidden'} alt="part11" />
            <img src={part12} className={+nums[11] > 11 && +nums[11] < 14 ? 'h-[50vh] w-auto absolute top-[25vh] right-[40vw]' : 'hidden'} alt="part12" />
            <img src={part13} className={+nums[12] > 12 && +nums[12] < 14 ? 'h-[50vh] w-auto absolute top-[25vh] right-[40vw]' : 'hidden'} alt="part13" />
            <img src={part14} className={+nums[13] > 13 && +nums[13] < 15 ? 'h-[50vh] w-auto absolute top-[25vh] right-[40vw]' : 'hidden'} alt="part14" />
        </div>
    );
}

export default Desplay;