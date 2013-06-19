class UserMailer < ActionMailer::Base
  default from: "photogallery@example.com"
  def welcome_email(user)
    @user = user
    mail(:to => "<#{user.email}>", :subject => "welcome to Photogallery")
  end
end
