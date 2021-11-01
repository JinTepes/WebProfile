import WorkItem from './WorkItem';

import dStyle from '../layouts/WorkSectionStyle.module.css';
//importing images
import etchasketch from '../imgs/Etch-A-Sketch.png';
import janken from '../imgs/Janken.png';
import simplecalculator from '../imgs/Simple-Calculator.png';
import informativesite from '../imgs/Informative-site.png';
import library from '../imgs/Athenium.png';
import programminglogo from '../imgs/programminglogo.png';
import tictactoelogo from '../imgs/TicTacToeBG.png';

function WorkSection(){
    return(
        <section className={dStyle.workParent} id='worksSection'>
            <h1 style={{fontSize: '50px'}}>
                Works
            </h1>
            <div className={dStyle.workHolder}>
                <WorkItem workTitle='Web: Etch-A-Sketch'
                previewLink='https://jintepes.github.io/etch-a-sketch/'
                prevImg={etchasketch}
                />
                <WorkItem workTitle='Web: Janken'
                previewLink='https://jintepes.github.io/janken/'
                prevImg={janken}
                />
                <WorkItem workTitle='Web: Simple Calculator'
                previewLink='https://jintepes.github.io/calculator/'
                prevImg={simplecalculator}
                />
                <WorkItem workTitle='Web: Informative Site'
                previewLink='https://jintepes.github.io/Saiky-Site/'
                prevImg={informativesite}
                />
                <WorkItem workTitle='Web: Library'
                previewLink='https://jintepes.github.io/library/'
                prevImg={library}
                />
                <WorkItem workTitle='Python: DNS Changer'
                previewLink='https://github.com/JinTepes/dnsChanger'
                prevImg={programminglogo}
                />
                <WorkItem workTitle='C++: Shutdown Timer'
                previewLink='https://github.com/JinTepes/shutdown-timer'
                prevImg={programminglogo}
                />
                <WorkItem workTitle='Java: Registration Software'
                previewLink='https://github.com/JinTepes/mit-clubregistration'
                prevImg={programminglogo}
                />
                <WorkItem workTitle='Web: Tic-Tac-Toe'
                previewLink='https://jintepes.github.io/tic-tac-toe/'
                prevImg={tictactoelogo}
                />
            </div>
        </section>
    );
}

export default WorkSection;