import React from 'react'
import Titre from "../Titre";

export default function index() {
    return (
        <div className="section" id='info'>

            <Titre icon='s fa-info-circle' title='Info'/> {[
                {q:'What is it?', a:'The term stained glass refers to coloured glass as a material and to works creat' +
                        'ed from it. Throughout its thousand-year history, the term has been applied almo' +
                        'st exclusively to the windows of churches and other significant religious buildi' +
                        'ngs. Although traditionally made in flat panels and used as windows, the creatio' +
                        'ns of modern stained glass artists also include three-dimensional structures and' +
                        ' sculpture. Modern vernacular usage has often extended the term "stained glass" ' +
                        'to include domestic lead light and objets dart created from foil glasswork exemp' +
                        'lified in the famous lamps of Louis Comfort Tiffany'},
                {q:'How is it made?', a:'As a material stained glass is glass that has been coloured by adding metallic s' +
                        'alts during its manufacture, and usually then further decorating it in various w' +
                        'ays. The coloured glass is crafted into stained glass windows in which small pie' +
                        'ces of glass are arranged to form patterns or pictures, held together traditiona' +
                        'lly by strips of lead and supported by a rigid frame. Painted details and yellow' +
                        ' stain are often used to enhance the design. The term stained glass is also appl' +
                        'ied to windows in enamelled glass in which the colours have been painted onto th' +
                        'e glass and then fused to the glass in a kiln; very often this technique is only' +
                        ' applied to parts of a window'},
                {q:'How is it an art?', a:'Stained glass, as an art and a craft, requires the artistic skill to conceive an' +
                        ' appropriate and workable design, and the engineering skills to assemble the pie' +
                        'ce. A window must fit snugly into the space for which it is made, must resist wi' +
                        'nd and rain, and also, especially in the larger windows, must support its own we' +
                        'ight. Many large windows have withstood the test of time and remained substantia' +
                        'lly intact since the Late Middle Ages. In Western Europe, together with illumina' +
                        'ted manuscripts, they constitute the major form of medieval pictorial art to hav' +
                        'e survived. In this context, the purpose of a stained glass window is not to all' +
                        'ow those within a building to see the world outside or even primarily to admit l' +
                        'ight but rather to control it. For this reason stained glass windows have been d' +
                        'escribed as "illuminated wall decorations".'},
                {q:'Where is it made for?', a:'The design of a window may be abstract or figurative; may incorporate narratives' +
                        ' drawn from the Bible, history, or literature; may represent saints or patrons, ' +
                        'or use symbolic motifs, in particular armorial. Windows within a building may be' +
                        ' thematic, for example: within a church episodes from the life of Christ; within' +
                        ' a parliament building shields of the constituencies; within a college hall figu' +
                        'res representing the arts and sciences; or within a home flora, fauna, or landsc' +
                        'ape'}
            ].map((t, i) => {
                return (
                    <div className='text-details' key={'info' + i}>
                        <button
                            className="add-anime btn-lg btn w-100 btn-outline-secondary border-0 border-bottom border-info rounded-2xl my-3"
                            type="button"
                            data-toggle="collapse"
                            data-target={"#collapseExample" + i}
                            aria-expanded="false"
                            aria-controls={ "collapseExample" + i }>
                            <i className="text-xl mx-2 far fa-comment-alt"></i>
                            {t.q}
                        </button>
                        <div className="collapse" id={"collapseExample" + i}>
                            <div className="card card-body">
                                <p>
                                    <i className="text-2xl m-2 far fa-comment-dots fa-pull-left text-info"></i>
                                    {t.a}
                                </p>
                            </div>
                        </div>
                    </div>
                )
            })
}

        </div>
    )
}
