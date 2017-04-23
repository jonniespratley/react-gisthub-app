import React from 'react'

//Gist Stats
const GistStats = ({
	gist
}) => (
	<div className="gist__stats text-muted d-flex hidden-sm-down">
		<div className="mr-4 text-nowrap"><i className="fa fa-file-code-o mr-1"></i><span>1</span> file</div>
		<div className="mr-4 text-nowrap"><i className="fa fa-code-fork mr-1"></i>0 forks</div>
		<div className="mr-4 text-nowrap"><i className="fa fa-comment-o mr-1"></i>0 comments</div>
		<div className="mr-2 text-nowrap"><i className="fa fa-star mr-1"></i>0 stars</div>
	</div>
)
export default GistStats
