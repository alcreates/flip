
class AppController < ApplicationController
  
  def index
    response = RestClient::Request.execute(
      method: :get,
      url: 'http://api.openweathermap.org/data/2.5/forecast?id=5128638&APPID=97ba0137a822f0aa0167956e1aa88b78'
      )
   
   
   puts response.body
  end
end
