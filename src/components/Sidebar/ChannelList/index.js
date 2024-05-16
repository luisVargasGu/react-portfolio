import React,{ useEffect }  from 'react';
import { NavLink } from 'react-router-dom';

const ChannelList = () => {
    // const dispatch = useDispatch();
    // const { channels } = useSelector((state) => {
    //     console.log('testing:', state);
    //     return state;
    // });

    // const handleChannelClick = (channelId) => {
    //     dispatch(updateSelectedChannel(channelId));
    // }

    useEffect(() => {
        console.log('ChannelList');
    });

    const channels = [];
    return (
        <nav>
            {channels ? (channels.map((channel) => (
                <NavLink
                    key={channel.ID}
                    exact="true"
                    activeclassname="active"
                    className="channel-link"
                    onClick={() => (channel.ID)}>
                    <h3>{channel.ID}</h3>
                </NavLink>
            ))
            ) : (
                <h3>No channels</h3>
            )}
        </nav>

    );
}

// export default connect(mapStateToProps, mapDispatchToProps)(ChannelList);

export default ChannelList;
