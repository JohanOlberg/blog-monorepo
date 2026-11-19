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
        id:"result-1",
        joke:"I swear this is already on my to-write list!",
        image:IWillWrite,
        action:"View all articles",
        altImg:"A typewriter with a sheet of paper",
        alt:"Try another keyword or explore all articles.",

    },
    {
        id:"result-2",
        joke:"My dog ate the draft about this!",
        image:myDog,
        action:"View all articles",
        altImg:"A dog beside a draft",
        alt:"Try another keyword or explore all articles.",

    },
    {
        id:"result-3",
        joke:"Noted! Great topic for the blog!",
        image:noted,
        action:"View all articles",
        altImg:"A retro computer displaying a note",
        alt:"Try another keyword or explore all articles.",
    },
    {
        id:"result-4",
        joke:"Hmm… I knew I was forgetting something!",
        image:Iforgote,
        action:"View all articles",
        altImg:"A reminder illustration",
        alt:"Try fewer words or explore all articles.",
    },
    {
        id:"result-5",
        joke:"I need an upgrade to write about this!",
        image:needUpgrade,
        action:"View all articles",
        altImg:"A retro computer waiting for an upgrade",
        alt:"Try another keyword or explore all articles.",
    },
    {
        id:"result-6",
        joke:"404: Inspiration not found",
        image:needUpgrade,
        action:"View all articles",
        altImg:"A retro computer waiting for inspiration",
        alt:"Try another keyword or explore all articles.",
    },
    {
        id:"result-7",
        joke:"Searched every folder and couldn't find it!",
        image:emptyFiles,
        action:"View all articles",
        altImg:"Empty folders and files",
        alt:"Try another keyword or explore all articles.",
    },
]

export const fewResultsPieces: ResultBentoPiece[] = [
    
    {
        id:"result-8",
        joke:"Out of coffee — be right back to write more!",
        image:noCoffee,
        action:"View all articles",
        altImg:"A coffee illustration",
        alt:"There are more topics to explore in the full article list.",
    },
    {
        id:"result-9",
        joke:"My computer got tired!",
        image:pcIsDown,
        action:"View all articles",
        altImg:"A tired retro computer",
        alt:"There are more topics to explore in the full article list.",
    },
    {
        id:"result-10",
        joke:"I need an upgrade to write more!",
        image:needUpgrade,
        action:"View all articles",
        altImg:"A retro computer waiting for an upgrade",
        alt:"There are more topics to explore in the full article list.",
    },
    {
        id:"result-11",
        joke:"Transferring new stuff!",
        image:transfer,
        action:"View all articles",
        altImg:"A file transfer illustration",
        alt:"There are more topics to explore in the full article list.",
    },
    {
        id:"result-12",
        joke:"Only a few posts so far… more coming soon.”",
        image:transfer,
        action:"View all articles",
        altImg:"A file transfer illustration",
        alt:"There are more topics to explore in the full article list.",
    },
    {
        id:"result-13",
        joke:"Still under construction on the typewriter",
        image:transfer,
        action:"View all articles",
        altImg:"A file transfer illustration",
        alt:"There are more topics to explore in the full article list.",
    },
]