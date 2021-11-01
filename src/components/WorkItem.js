import dStyle from '../layouts/WorkItemStyle.module.css';

function WorkItem( {workTitle, previewLink, prevImg} ){
    return(
        <div className={dStyle.wrkItemHolder}>
            <div className={dStyle.wrkItmChild}>
                <div className={dStyle.imgHolder}>
                    <img src={prevImg} alt={prevImg} className={dStyle.imgPreview}></img>
                </div>
                <h2>{workTitle}</h2>
                <div className={dStyle.ankorHolder}>
                    <a className={dStyle.ankor} href={previewLink} target="blank">Preview</a>
                </div>
            </div>
        </div>
    );
}

export default WorkItem;