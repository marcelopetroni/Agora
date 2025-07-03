import HirerProfile from '../components/hirerProfile'
import ArtistProfile from '../components/artistProfile'

const Perfil = ({ userType = "hirer" }) => {
return (
		<div className='ag-flex ag-flex-col ag-w-full ag-h-full'>
			{userType === 'artist' ? (
				<HirerProfile/>
			) : (
				<ArtistProfile />
			)}
		</div>
)
}

export default Perfil
