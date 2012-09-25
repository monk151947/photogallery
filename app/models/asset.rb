class Asset < ActiveRecord::Base
  attr_accessible :asset_content_type, :asset_file_name, :asset_file_size, :asset_updated_at, :searchapp_id, :asset
  belongs_to :searchapp
  validates_attachment :asset, :presence => true
  has_attached_file :asset, :styles=>{:thumb => "120x100>"}
  #has_attached_file :asset,
   #                 :styles => { :medium => "300x300>", :thumb => "100x100>" },
   #                 :storage => :Dropboxstorage,
   #                 :path => "/:attachment/:attachment/:id/:style/:filename"
 
  validates_attachment_content_type :asset, 
  :content_type=>['image/jpeg', 'image/png', 'image/gif'],
  :size => { :in => 0..1000.megabytes }




end

