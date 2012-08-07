class Asset < ActiveRecord::Base
  attr_accessible :asset_content_type, :asset_file_name, :asset_file_size, :asset_updated_at, :searchapp_id, :asset
  belongs_to :searchapp
  has_attached_file :asset, :styles=>{:thumb => "100x100>"}
  #has_attached_file :asset,
   #                 :styles => { :medium => "300x300>", :thumb => "100x100>" },
   #                 :storage => :Dropboxstorage,
   #                 :path => "/:attachment/:attachment/:id/:style/:filename"
  validates_attachment :asset, :presence => true,
  :size => { :in => 0..10000.kilobytes }



end

