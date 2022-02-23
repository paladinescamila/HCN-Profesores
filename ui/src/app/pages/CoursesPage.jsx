import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {useHistory, NavLink} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChalkboardTeacher} from "@fortawesome/free-solid-svg-icons";

import BaseSection from "../components/UI/BaseSection";

import {actions} from "../modules/Courses/_redux/coursesRedux";

function getCardsList(list, size = 3) {
	let ans = [];
	for (let i = 0; i < list.length; i += size) {
		ans.push(list.slice(i, i + size));
	}
	return ans;
}

export default function CoursesPage() {
	const {coursesList} = useSelector((state) => {
		console.log(state);
		return state.courses;
	});
	const dispatch = useDispatch();

	console.log(coursesList);

	React.useEffect(() => {
		dispatch(actions.getCoursesList());
	}, [dispatch]);

	const handleCourse = (id) => {
		dispatch(actions.setCurrentCourse("id", id));
	};

	return (
		<BaseSection title='Cursos'>
			{/* Courses */}
			{getCardsList(coursesList).map((row, i) => (
				<div key={i} className='row my-3'>
					{row.map((value, j) => (
						<div key={j} className='col'>
							<NavLink to='/courses'>
								<div className='card custom-card' style={{height: "150px"}} onClick={() => handleCourse(value.ID)}>
									<div className='d-flex card-body justify-content-center align-items-center'>
										<div className='d-flex flex-column align-items-center'>
											<FontAwesomeIcon icon={faChalkboardTeacher} size='3x' />
											<span className='mt-1'>{value.Name}</span>
										</div>
									</div>
								</div>
							</NavLink>
						</div>
					))}
				</div>
			))}
		</BaseSection>
	);
}
