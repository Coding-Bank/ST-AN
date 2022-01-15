import styled from 'styled-components';

const Rightside = (props) => {
    return (
        <Container>
            <FollowCard>
                <Title>
                    <h2>Add to your feed</h2>
                    <img src="/images/feed-icon.svg" alt="" />
                </Title>

                <FeedList>
                    <li>
                        <a>
                            <Avatar />
                        </a>
                        <div>
                            <span>#ST-AN</span>
                            <button>Follow</button>
                        </div>
                    </li>
                    <li>
                        <a>
                            <Avatar />
                        </a>
                        <div>
                            <span>#MINOR PROJECT</span>
                            <button>Follow</button>
                        </div>
                    </li>
                </FeedList>

                <Recommendation>
                    View all recommendations
                    <img src="/images/right-icon.svg" alt="" />
                </Recommendation>                
            </FollowCard>

           
            <BannerCard>
                <img src="data:image/jpeg;base64,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 " alt="" />
            </BannerCard>
        </Container>
    );
};

const Container = styled.div`
    grid-area: rightside;
`;

const FollowCard = styled.div`
    text-align: center;
    overflow: hidden;
    margin-bottom: 8px;
    background-color: #fff;
    border-radius: 5px;
    position: relative;
    border: none;
    box-shadow: 2px 3px 2px -2px rgba(110,104,104,0.75);
    padding: 12px;
`;

const Title =styled.div`
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
    font-size: 16px;
    width: 100%;
    color: rgba(0, 0, 0, 0.6);
`;

const FeedList = styled.ul`
    margin-top: 16px;
    
    li {
        display: flex;
        align-items: center;
        margin: 12px;
        position: relative;
        font-size: 14px;

        & > div {
            display: flex;
            flex-direction: column;
        }

        button {
            background-color: transparent;
            color: rgba(0, 0, 0, 0.6);
            box-shadow: 2px 3px 0px -2px rgba(110,104,104,0.75) inset;
            padding: 16px;
            align-items: center;
            border-radius: 15px;
            box-sizing: border-box;
            font-weight: 600;
            display: inline-flex;
            justify-content: center;
            max-height: 32px;
            max-width: 480px;
            text-align: center;
            outline: none;

            &:hover {
                background-color: rgba(0,0,0,0.08);
                cursor: pointer;
            }
        }
    }
`;

const Avatar = styled.div`
    background-image: url('https://static-exp1.licdn.com/sc/h/1b4vl1r54ijmrmcyxzoidwmxs');
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    width: 48px;
    height: 48px;
    margin-right: 8px;
`;

const Recommendation = styled.a`
    color: #0a66c2;
    display: flex;
    align-items: center;
    font-size: 14px;
`;

const BannerCard = styled(FollowCard)`
    img {
        width: 100%;
        height: '1000px';
    }
`;

export default Rightside;