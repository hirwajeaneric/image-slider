import React, { useState } from 'react'

const ImageSlider = ({slides}) => {
    const [currentIndex, setCurrentIndex] =  useState(0);

    // const slideStyles = {
    //     width: '100%',
    //     heigh: '100%',
    //     borderRadius: '10px',
    //     backgroundPosition: 'center',
    //     bacgroundSize: 'cover',
    //     background: 'black',
    //     backgroundImage: `url(${slides[currentIndex].url})`,
    // }

    const styles = {
        sliderStyles: {
            height: '100%',
            position: 'relative'
        },
        imgStyles: {
            width: '100%',
            heigh: '100%',
        },
        leftArrow: {
            position: 'absolute',
            top: '50%',
            transform: 'translate(0, -50%)',
            left: '32px',
            fontSize: '45px',
            color: '#fff',
            zIndex: 1, 
            cursor: 'pointer'
        }, 
        rightArrow: {
            position: 'absolute',
            top: '50%',
            transform: 'translate(0, -50%)',
            right: '32px',
            fontSize: '45px',
            color: '#fff',
            zIndex: 1, 
            cursor: 'pointer'
        },
        dotsContainerStyles: {
            display: 'flex',
            justifyContent: 'center'
        },
        doStyles: {
            margin: '0 3px',
            cursor: 'pointer',
            fontSize: '20px'
        },
        smallImageStyles: {
            width: '70px',
            margin: '0 3px',
            cursor: 'pointer'
        }
    }

    const goToNext = () => {
        const isLastSlide = currentIndex === slides.length-1;
        const newIndex = isLastSlide ? 0 : currentIndex+1
        setCurrentIndex(newIndex)
    }

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length -1 : currentIndex - 1;
        setCurrentIndex(newIndex)
    }

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
    }

    return (
        <div style={styles.sliderStyles}>
            <div style={styles.leftArrow} onClick={goToPrevious}>❰</div>
            <div style={styles.rightArrow} onClick={goToNext}>❱</div>
            <img style={styles.imgStyles} src={slides[currentIndex].url} alt="" />
            <div style={styles.dotsContainerStyles}>
                {slides.map((slide, slideIndex) => (
                    <img src={slides[slideIndex].url} alt="" style={styles.smallImageStyles} key={slideIndex} onClick={()=> goToSlide(slideIndex)}/>
                    // <div style={styles.doStyles} key={slideIndex} onClick={()=> goToSlide(slideIndex)}>●</div>
                ))}
            </div>
        </div>
  )
}

export default ImageSlider