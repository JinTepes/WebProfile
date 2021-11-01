import dStyle from '../layouts/HomeSectionStyle.module.css';

function HomeSection(){
    return(
        <section className={dStyle.parent} id='homeSection'>
            <div className={dStyle.holder}>
                <div className={dStyle.scrollThis}>
                    <div className={dStyle.item}>Web Development</div>
                    <div className={dStyle.item}>Engineering</div>
                    <div className={dStyle.item}>Surveillance System</div>
                    <div className={dStyle.item}>Networking</div>
                    <div className={dStyle.item}>Python Programming</div>
                    <div className={dStyle.item}>Windows Automation</div>
                    <div className={dStyle.item}>PC Gaming</div>
                </div>
            </div>
        </section>
    );
}

export default HomeSection;