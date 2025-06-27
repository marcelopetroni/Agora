import HirerProfile from '../components/hirerProfile'
import ArtistProfile from '../components/artistProfile'

const Perfil = ({ userType = "hirer" }) => {
return (
	<div className='ag-w-full ag-h-full ag-flex ag-flex-row ag-bg-brancohome'>
		<div className='ag-flex ag-flex-col ag-w-full ag-h-ful'>
			{userType === 'hirer' ? (
				<HirerProfile/>
			) : (
				<ArtistProfile />
			)}
		</div>
	</div>
)
}

export default Perfil
