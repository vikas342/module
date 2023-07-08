using Microsoft.AspNetCore.SignalR;

namespace SR_p2.Hubs
{
    public class ChatHub:Hub
    {

        public Task sendMessage1(string user,string message)
        {
            return Clients.All.SendAsync("ReaciveOne",user,message);
        }
    }
}
