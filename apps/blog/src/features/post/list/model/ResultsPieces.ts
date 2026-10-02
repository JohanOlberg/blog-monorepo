import myDog from "../../../../assets/notFound/myDog.webp"
import IWillWrite from "../../../../assets/notFound/IWillWrite.webp"
import emptyFiles from "../../../../assets/notFound/emptyFiles.webp"
import transfer from "../../../../assets/notFound/transfer.webp"
import needUpgrade from "../../../../assets/notFound/needUpgrade.webp"
import pcIsDown from "../../../../assets/notFound/pcIsDown.webp"
import noted from "../../../../assets/notFound/noted.webp"
import noCoffee from "../../../../assets/notFound/noCoffee.webp"
import Iforgote from "../../../../assets/notFound/Iforgote.webp"

export type ResultBentoPiece = {
  id: string;
  joke: string;
  action: string;
  altImg:string;
  image: string;
  alt: string;
};



export const notResultsPieces: ResultBentoPiece[] = [
    {
        id:"",
        joke:"I swear this is already on my to-write list!",
        image:IWillWrite,
        action:"",
        altImg:"",
        alt:"IWillWrite",

    },
    {
        id:"",
        joke:"My dog ate the draft about this!",
        image:myDog,
        action:"",
        altImg:"",
        alt:"",

    },
    {
        id:"",
        joke:"Noted! Great topic for the blog!",
        image:noted,
        action:"",
        altImg:"",
        alt:"",
    },
    {
        id:"",
        joke:"Hmm… I knew I was forgetting something!",
        image:Iforgote,
        action:"Maybe search with fewer words",
        altImg:"",
        alt:"",
    },
    {
        id:"",
        joke:"I need an upgrade to write about this!",
        image:needUpgrade,
        action:"Try a different keyword",
        altImg:"",
        alt:"",
    },
    {
        id:"",
        joke:"404: Inspiration not found",
        image:needUpgrade,
        action:"Try a different keyword",
        altImg:"",
        alt:"",
    },
    {
        id:"",
        joke:"Searched every folder and couldn't find it!",
        image:emptyFiles,
        action:"Try a different keyword",
        altImg:"",
        alt:"",
    },
]

export const fewResultsPieces: ResultBentoPiece[] = [
    
    {
        id:"",
        joke:"Out of coffee — be right back to write more!",
        image:noCoffee,
        action:"",
        altImg:"",
        alt:"",
    },
    {
        id:"",
        joke:"My computer got tired!",
        image:pcIsDown,
        action:"",
        altImg:"",
        alt:"",
    },
    {
        id:"",
        joke:"I need an upgrade to write more!",
        image:needUpgrade,
        action:"",
        altImg:"",
        alt:"",
    },
    {
        id:"",
        joke:"Transferring new stuff!",
        image:transfer,
        action:"",
        altImg:"",
        alt:"",
    },
    {
        id:"",
        joke:"Only a few posts so far… more coming soon.”",
        image:transfer,
        action:"",
        altImg:"",
        alt:"",
    },
    {
        id:"",
        joke:"Still under construction on the typewriter",
        image:transfer,
        action:"",
        altImg:"",
        alt:"",
    },
]