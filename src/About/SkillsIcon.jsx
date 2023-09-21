import '../styles/SkillsIcon.css'

function SkillsIcon({imgSrc, iconName, alt}) {

    return (
        <div className="icon-c">
            <img src={imgSrc} alt={alt}/>
            <p>{iconName}</p>
        </div>
    )
}

export default SkillsIcon