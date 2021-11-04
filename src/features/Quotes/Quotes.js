import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectOffset } from "../timer/timerSlice";

export function Quotes() {
   const offset = useSelector(selectOffset);
    

    const quotes = [
        "Even a broken clock is right twice a day. Except this one.",
        "“Listen to God with a broken heart. He is not only the doctor who mends it, but also the father who wipes away the tears.”― Criss Jami",
        "“i felt her absence. it was like waking up one day with no teeth in your mouth. you wouldn't need to run to the mirror to know they were gone”― James Dashner, The Scorch Trials",
        "“To be rejected by someone doesn't mean you should also reject yourself or that you should think of yourself as a lesser person. It doesn't mean that nobody will ever love you anymore. Remember that only ONE person has rejected you at the moment, and it only hurt so much because to you, that person's opinion symbolized the opinion of the whole world, of God.”― Jocelyn Soriano, Mend My Broken Heart",
        "“The best way to not get your heart broken, is pretending you don't have one.”― Charlie Sheen",
        "“Yes, I understand why things had to happen this way. I understand his reason for causing me pain. But mere understanding does not chase away the hurt. It does not call upon the sun when dark clouds have loomed over me. Let the rain come then if it must come! And let it wash away the dust that hurt my eyes!”― Jocelyn Soriano, Mend My Broken Heart",
        "“We should love, not fall in love, because everything that falls, gets broken.”― Taylor Swift, Taylor Swift",
        "“He'd broken his leg dropping down from the rooftop. The bone didn't set right, and he'd limped ever after. So he'd found himself a Fabrikator and had his cane made. It became a declaration. There was no part of him that was no broken, that had not healed wrong, and there was no part of him that was not stronger for having been broken.” ― Leigh Bardugo, Six of Crows",
        "“We die a little every day and by degrees we’re reborn into different men, older men in the same clothes, with the same scars.” ― Mark Lawrence, King of Thorns",
        "“I scream for everything that has gone wrong. I scream for everything broken in our lives.” ― Marie Lu, Champion",
        "“So I am not a broken heart. \n" +
        "I am not the weight I lost or miles or ran and I am not the way I slept on my doorstep under the bare sky in smell of tears and whiskey because my apartment was empty and if I were to be this empty I wanted something solid to sleep on. Like concrete.\n" +
        "I am not this year and I am not your fault.\n" +
        "I am muscles building cells, a little every day, because they broke that day,\n" +
        "but bones are stronger once they heal and I am smiling to the bus driver and replacing my groceries once a week and I am not sitting for hours in the shower anymore.\n" +
        "I am the way a life unfolds and bloom and seasons come and go and I am the way the spring always finds a way to turn even the coldest winter into a field of green and flowers and new life.\n" +
        "I am not your fault.” ― Charlotte Eriksson, You're Doing Just Fine",
        "“But hurry, let's entwine ourselves as one, our mouth broken, our soul bitten by love, so time discovers us safely destroyed.” ― Federico Garcia Lorca",
        "“You are damaged and broken and unhinged. But so are shooting stars and comets.” ― Nikita Gill",
        "“There is no perfection, only beautiful versions of brokenness.” ― Shannon L. Alder",
        "“I once had a dreams of becoming a beautiful poet, but upon an unfortunate series of events some of those dreams dashed and divided like a million stars in the night sky that I wished on over and over again, sparkling and broken. But I didn't really mind, because I knew that it takes getting everything you ever wanted, and then losing it to know what true freedom is.” ― Lana Del Rey",
        "“A fine glass vase goes from treasure to trash, the moment it is broken. Fortunately, something else happens to you and me. Pick up your pieces. Then, help me gather mine.” ― Vera Nazarian, The Perpetual Calendar of Inspiration",
        "“Who fixes broken people? Is it only other broken people, ones who've already been ruined? And do we need to be fixed? It was the messiness and hurt in our pasts that drove us, and that same hurt connected us at a subdermal level, the kind of scars written so deeply in your cells that you can't even see them anymore, only recognize them in someone else.” ― Leah Raeder, Unteachable",
    ];
    useEffect(()=>setQuote(quotes[getRandomInt(quotes.length)]), []);


    const [quote, setQuote] = useState('"a clock that is sometimes broken."')
    
    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }


    if (offset == 0){
        //the clock is not broken
        return(<></>);
    }
    else{
        return(
        <>
            <div class = "row display-6">
                We're All Broken Clocks
            </div>
            <div class = "row">
                {quote}
            </div>
        </>
        )
    }

   

}