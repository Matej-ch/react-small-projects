import {useEffect,useState,useCallback} from "react";

export default function useTrivia() {

    const [question,setQuestion] = useState(null);
    const [category,setCategory] = useState('any');
    const [difficulty,setDifficulty] = useState('any');

    const getQuestion = useCallback(() => {

        let url = 'https://opentdb.com/api.php?amount=1';
        if(category !== 'any') {
            url += `&category=${category}`;
        }
        if(difficulty !== 'any') {
            url += `&difficulty=${difficulty}`;
        }
        fetch(url).then(res => res.json()).then(data => {setQuestion(data.results[0])});
    },[category,difficulty])


    useEffect(() => {
        getQuestion();
    },[getQuestion,category]);


    return {question,getQuestion,category,setCategory,difficulty,setDifficulty};
}