import React, {useState, useEffect} from 'react'
import './App.css';
import './nicepage.css';
import Text from './components/Text'
import Buttons from './components/Buttons'
import Code from './components/Code'

function App() {

  const [bg, setBg] = useState('rgba(254,236,230,0.66)');
  const [color, setColor] = useState('black');
  const [family, setFamily] = useState('Georgia');
  
  const [style, setStyle] = useState({
    backgroundColor: bg,
    color: color,
    fontFamily: family
  });

  useEffect(()=>{
    setStyle({
      backgroundColor: bg,
      color: color,
      fontFamily: family
    })
  },[bg,color,family])

  const onClickHandeler = (key, value) => {
    console.log(key);
    console.log(value);

    if(key==='bg'){
      setBg(value);
      
    }
    else if(key==='family'){
      setFamily(value);
      
    }
    else if(key==='font'){
      setColor(value)
      
    }
    else{
      setBg('rgba(254,236,230,0.66)');
      setFamily('Georgia');
      setColor('black')
    }

  }



  return (
    <div className="u-body">
      <section className="u-clearfix u-section-1" id="sec-c54c">
            <div className="u-clearfix u-sheet u-sheet-1">
              <div className="u-clearfix u-expanded-width u-layout-wrap u-layout-wrap-1">
                <div className="u-layout">
                  <div className="u-layout-col">
                    <Text styleElement={style}/>

                    <div className="u-size-30">
                      <div className="u-layout-row">
                        <Buttons onClickHandeler={onClickHandeler}/>
                        <Code styleElement={style}/>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </section>
    </div>
  );
}

export default App;
