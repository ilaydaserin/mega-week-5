import './Skills.css';

function Skills() {
    return(
        <>
        <div id="skills">
        <div className="skills-header"><h1>Skills</h1></div>
        <div className="line"></div>

        <h3>What I Know</h3>
        <div id="progress-bars">
            <h4>HTML</h4>
            <div className="progress">
                <div style={{ width: '100%' }}></div>
            </div>
            <h4>CSS</h4>
            <div className="progress">
                <div style={{ width: '90%' }}></div>
            </div>
            <h4>JavaScript</h4>
            <div className="progress">
                <div style={{ width: '80%' }}></div>
            </div>
            <h4>React</h4>
            <div className="progress">
                <div style={{ width: '20%' }}></div>
            </div>
            <h4>Python</h4>
            <div className="progress">
                <div style={{ width: '60%' }}></div>
            </div>
            <h4>Java</h4>
            <div className="progress">
                <div style={{ width: '50%' }}></div>
            </div>
            <h4>C</h4>
            <div className="progress">
                <div style={{ width: '60%' }}></div>
            </div>
        </div>



        </div>
        </>
    )
}
export default Skills;