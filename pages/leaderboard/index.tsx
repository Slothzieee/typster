import { NextPage } from 'next';

import Page from '../../components/Page';
import RankCard from '../../components/RankCard';

import useSwr from 'swr';
import fetcher from '../../utils/pages/fetcher';

interface User {
	username: string;
	score: number;
}

const Leaderboard: NextPage = () => {
	const { data } = useSwr(`/api/ranking`, fetcher);

	return (
		<Page title="Leaderboard">
			<div className="leaderboard">
				<h1>Leaderboard</h1>

				{data && (
					<div className="leaderboard__ranking">
						{data.userData.map((user: User, i: number) => (
							<RankCard
								key={`${user.username}-${i}`}
								name={user.username}
								score={user.score}
								index={i}
							/>
						))}
					</div>
				)}
			</div>
		</Page>
	);
};

export default Leaderboard;
