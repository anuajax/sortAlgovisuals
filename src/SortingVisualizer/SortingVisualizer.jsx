import React, { Component } from 'react';
import './Sorting.styles.scss';
import Button from '@material-ui/core/Button';

import {getMergeSortAnimations} from '../sorting-Algos/merge.sort.js';
import {getBubbleSortAnimations,DescriptionBubble} from '../sorting-Algos/Bubblesort';
import {getQuickSortAnimations} from '../sorting-Algos/quick.sort';
import {getInsertionSortAnimations} from '../sorting-Algos/insertion.sort';
import {getSelectionSortAnimations} from '../sorting-Algos/selection.sort';
//import draw, { getAnimatedBubble } from '../sorting-Algos/bubble.sort.jsx';
function randomIntegers(min,max) 
    {
        return Math.floor(Math.random() * (max-min+1)+min);
    }
    
class SortingVisualizer extends Component
{
    constructor(props)
    {
        super(props);
        this.state={
            array:[],
            noOfElements:20
        }
    }
    
    resetArray ()
    {
        const newarray = [];
        for(let i=0;i<50;i++)
        {
            newarray.push(randomIntegers(10,1000))
        }
        this.setState({array:newarray})
    }
    componentDidMount()
    {
        this.resetArray();
    }
   
    bubbleSort() {
       
        const [animations,sortArray] = getBubbleSortAnimations(this.state.array);
        for (let i = 0; i < animations.length; i++) {
            const isColorChange = animations[i][0] == "comparision1" || animations[i][0] == "comparision2";
            const arrayBars = document.getElementsByClassName('element-bar');
            if(isColorChange === true) {
                const color = (animations[i][0] == "comparision1") ? 'red' : 'cadetblue';
                const [comparision, barOneIndex, barTwoIndex] = animations[i];
                const barOneStyle = arrayBars[barOneIndex].style;
                const barTwoStyle = arrayBars[barTwoIndex].style;
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                },i * 30);
            }
            else {
                const [swap, barIndex, newHeight] = animations[i];
                if (barIndex === -1) {
                    continue;
                }
                const barStyle = arrayBars[barIndex].style;
                setTimeout(() => {
                    barStyle.height = `${newHeight/20}vh`;
                },i * 30);  
            }
        }
       
    }
    selectionSort() {
        
        const [animations,sortArray] = getSelectionSortAnimations(this.state.array);
        for (let i = 0; i < animations.length; i++) {
            const isColorChange = (animations[i][0] === "comparision1") || (animations[i][0] === "comparision2");
            const arrayBars = document.getElementsByClassName('element-bar');
            if(isColorChange === true) {
                const color = (animations[i][0] === "comparision1") ? 'red' : 'cadetblue';
                const [temp, barOneIndex, barTwoIndex] = animations[i];
                const barOneStyle = arrayBars[barOneIndex].style;
                const barTwoStyle = arrayBars[barTwoIndex].style;
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                },i * 30);
            }
            else {
                const [temp, barIndex, newHeight] = animations[i];
                const barStyle = arrayBars[barIndex].style;
                setTimeout(() => {
                    barStyle.height = `${newHeight/20}vh`;
                },i *30);  
            }
        }
         
    }
    insertionSort() {
       
        const [animations,sortArray] = getInsertionSortAnimations(this.state.array);
        for (let i = 0; i < animations.length; i++) {
            const isColorChange = (animations[i][0] === "comparision1") || (animations[i][0] === "comparision2");
            const arrayBars = document.getElementsByClassName('element-bar');
            if(isColorChange === true) {
                const color = (animations[i][0] === "comparision1") ? 'red' : 'cadetblue';
                const [temp, barOneIndex, barTwoIndex] = animations[i];
                const barOneStyle = arrayBars[barOneIndex].style;
                const barTwoStyle = arrayBars[barTwoIndex].style;
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                },i * 30);
            }
            else {
                const [temp, barIndex, newHeight] = animations[i];
                const barStyle = arrayBars[barIndex].style;
                setTimeout(() => {
                    barStyle.height = `${newHeight/20}vh`;
                },i * 30);  
            }
        }
        
    }
    mergeSort() {
        const animations = getMergeSortAnimations(this.state.array);
        for (let i = 0; i < animations.length; i++) {
          const arrayBars = document.getElementsByClassName('element-bar');
          const isColorChange = i % 3 !== 2;
          if (isColorChange) {
            const [barOneIdx, barTwoIdx] = animations[i];
            const barOneStyle = arrayBars[barOneIdx].style;
            const barTwoStyle = arrayBars[barTwoIdx].style;
            const color = i % 3 === 0 ? 'red' : 'cadetblue';
            setTimeout(() => {
              barOneStyle.backgroundColor = color;
              barTwoStyle.backgroundColor = color;
            }, i * 30);
          } else {
            setTimeout(() => {
              const [barOneIdx, newHeight] = animations[i];
              const barOneStyle = arrayBars[barOneIdx].style;
              barOneStyle.height = `${newHeight/20}vh`;
            }, i * 30);
          }
        }
      }
      quickSort() {
        
        const [animations,sortArray] = getQuickSortAnimations(this.state.array);
        for (let i = 0; i < animations.length; i++) {
            const isColorChange = animations[i][0] == "comparision1" || animations[i][0] == "comparision2";
            const arrayBars = document.getElementsByClassName('element-bar');
            if(isColorChange === true) {
                const color = (animations[i][0] == "comparision1") ? 'red' : 'cadetblue';
                const [comparision, barOneIndex, barTwoIndex] = animations[i];
                const barOneStyle = arrayBars[barOneIndex].style;
                const barTwoStyle = arrayBars[barTwoIndex].style;
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                },i * 30);
            }
            else {
                const [swap, barIndex, newHeight] = animations[i];
                if (barIndex === -1) {
                    continue;
                }
                const barStyle = arrayBars[barIndex].style;
                setTimeout(() => {
                    barStyle.height = `${newHeight/20}vh`;
                },i * 30);  
            }        }
         
    }
    render()
    {
        
        const { array } = this.state;
        return(
            <div>
          
            <div className="arraycontainer">

                  {array.map((value,index)=> (
                      <div className="element-bar" key={index} style={{height: `${value/20}vh`}}>
                        
                      </div>
                  ))}
                  </div>
                  <div>
                  <Button onClick={()=>this.resetArray()}>New Array</Button>
                  <Button onClick={()=>this.mergeSort()}>MergeSort</Button>
                  <Button onClick={()=>this.quickSort()} >QuickSort</Button>
                  <Button onClick={()=>this.bubbleSort()}>BubbleSort</Button>
                  <Button onClick={()=>this.insertionSort()}>InsertionSort</Button>
                  <Button onClick={()=>this.selectionSort()}>SelectionSort</Button>


                  </div> 
            </div>
        )
    }
}
export default SortingVisualizer;
