import HirerHome from '../components/hirerHome';
import ArtistHome from '../components/artistHome';

const Home = ({ userType = "hirer" }) => {

return (
	<div className='ag-w-full ag-h-full ag-flex ag-flex-row ag-bg-brancohome'>
		<div className='ag-flex ag-flex-col ag-w-full'>
			{userType === 'hirer' ? (
				<HirerHome/>
			) : (
				<ArtistHome/>
			)}
		</div>
  	</div>
  )
}

export default Home
