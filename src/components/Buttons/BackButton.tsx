

function BackButton() {

    const goToBackPage = () => {
        history.back()
    }

    return (
        <button onClick={goToBackPage}
        className='flex items-center text-gray-600 dark:text-gray-200 mb-3'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className=" fill-gray-600 dark:fill-gray-200"><path d="M13.293 6.293 7.586 12l5.707 5.707 1.414-1.414L10.414 12l4.293-4.293z"></path></svg>
            Back
            </button>
    )
}

export default BackButton